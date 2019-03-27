#!/usr/bin/env zsh
# \u2019 = Right Single Quote ie. ’
# \u201C = Left Double Quote
# \u201D = Right Double Quote
# \u2014 = Em Dash
# \u2022 = Bullet Point
# \u2013 = En Dash
# \u2026 = Ellipsis
gsed -i -e "s/$(echo -ne '\u2019')/\&rsquo;/g" $1
gsed -i -e "s/$(echo -ne '\u2014')/\&mdash;/g" $1
gsed -i -e "s/$(echo -ne '\u201C')/\&ldquo;/g" $1
gsed -i -e "s/$(echo -ne '\u201D')/\&rdquo;/g" $1
gsed -i -e "s/$(echo -ne '\u2022')/\&bull;/g" $1
gsed -i -e "s/$(echo -ne '\u2013')/\&ndash;/g" $1
gsed -i -e "s/$(echo -ne '\u2026')/\&hellip;/g" $1
cat $1 | grep $(echo -ne '\u2019')
cat $1 | grep $(echo -ne '\u2014')
cat $1 | grep $(echo -ne '\u201C')
cat $1 | grep $(echo -ne '\u201D')
cat $1 | grep $(echo -ne '\u2022')
cat $1 | grep $(echo -ne '\u2013')
cat $1 | grep $(echo -ne '\u2026')
echo "You shouldn't see any output from $0 besides this message."
