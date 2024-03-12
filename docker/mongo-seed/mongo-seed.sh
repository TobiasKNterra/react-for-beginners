#!/bin/bash

mongoimport --host mongodb --db blog --collection posts --type json --file /mongo-seed/data.json --jsonArray