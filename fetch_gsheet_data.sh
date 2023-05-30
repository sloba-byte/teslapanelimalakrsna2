#!/bin/bash
if [[ ( $@ == "--help") ||  $@ == "-h" || "$#" -ne 2 ]]
then 
	echo "Usage: $0 Needs two arguments, First is google SheetId and Second google sheet API access key"
	exit 0
fi 

gsheet_base_url="https://sheets.googleapis.com/v4/spreadsheets/"
sheet_id_values="${1}/values/"
tk5="TK5_Panel"
tfh="TFH_Panel"
tfv="TFV_Panel"
access_key="?key=${2}"

curl "${gsheet_base_url}${sheet_id_values}${tk5}${access_key}" > ./src/lib/prefatched/tk5.json
curl "${gsheet_base_url}${sheet_id_values}${tfh}${access_key}" > ./src/lib/prefatched/tfh.json
curl "${gsheet_base_url}${sheet_id_values}${tfv}${access_key}" > ./src/lib/prefatched/tfv.json