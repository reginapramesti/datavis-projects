import csv

with open('lights.csv', 'r') as source_file:
    with open('lights_geometry.csv', 'w') as dest_file:
        data = csv.reader(source_file)
        new_data_writer = csv.writer(dest_file)
        new_data = []
        count = 0
        for row in data:
            # take the combined coordinates and split into lat and long
            coords = row[-1][1:-1].split(',')

            del row[-1]
            new_row = row

            if count == 0:
                new_row.append('Latitude')
                new_row.append('Longitude')
                new_data_writer.writerow(new_row)
                count += 1 # workaround for errors with changing geolocation to 2 columns
            else:
                new_row.append(coords[0])
                new_row.append(coords[1])
                new_data_writer.writerow(new_row)
                new_data.append(new_row)
                count += 1
