#!/usr/bin/env bash
aws s3 --region 'us-west-2' sync public_old/ s3://dev.catalog.austincc.edu --exclude '*' --include '404/index.html' --dryrun
aws s3 --region 'us-west-2' sync public_old/ s3://dev.catalog.austincc.edu --exclude '*' --include '404.html' --dryrun
