import csv

with open('lights.csv', 'r') as source_file:
    with open('lights_geometry.csv', 'w') as dest_file:
        data = csv.reader(source_file)
        new_data_writer = csv.writer(dest_file)
        new_data = []
        count = 0
        outreach = None
        for row in data:
            # take the combined coordinates and split into lat and long
            coords = row[-1][1:-1].split(',')
            outreach = row[-3].split(' ')

            del row[-1]
            new_row = row

            if count == 0:
                new_row.append('latitude')
                new_row.append('longitude')
                new_data_writer.writerow(new_row)
                count += 1 # workaround for errors with changing geolocation to 2 columns
            else:
                if outreach[0] != 'NONE':
                    new_row[-2] = float(outreach[0])
                new_row.append(coords[0])
                new_row.append(coords[1])
                new_data_writer.writerow(new_row)
                new_data.append(new_row)
                count += 1
