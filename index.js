module.exports = {
    csv2json : function(csv_str){
        var csv = csv_str;
        csv = csv.split("\r\n");
        var json_list = [];
        var header_list = csv[0].split(",");
        for(var i=1;i<csv.length;i++){
            // each_row
            let each_data_string = csv[i];
            let each_cell_string = each_data_string.split(",");
            let tempObj = {};
            for(var j=0;j<header_list.length;j++){
                tempObj[header_list[j]] = each_cell_string[j];
            }
            json_list.push(tempObj);
        }
        return json_list;
    }
}