import csv, json

csvFilePath = "mountains.csv"
jsonFilePath = "file.json"

#read the csv and add the data to a dictionary

data = {}
with open (csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for csvRow in csvReader:
        id = csvRow["Mountain"]
        data[id] = csvRow
        data[id].update({'description':''})
        data[id].update({'quickSummary':''})


print(data)

# write the data toa json file
with open(jsonFilePath, "w") as jsonFile:
    jsonFile.write(json.dumps(data, indent = 4))

