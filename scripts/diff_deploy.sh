#!/usr/bin/env bash

scripts/diff.sh > scripts/diff.txt

# Clear previous file and write shebang
printf "#!/usr/bin/env bash\n" > scripts/sync_diff.sh
while read diff
do
	echo "$diff"
	echo "aws s3 --region 'us-west-2' sync public_old/ s3://dev.catalog.austincc.edu --exclude '*' --include '$diff' --dryrun" >> scripts/sync_diff.sh
done < scripts/diff.txt

source scripts/sync_diff.sh
