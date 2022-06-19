### Convert String of CSV (a,b,c\\n11,12,13\\n21,22,23...) to JSON format object.

```
    const csv2json = require("@s1031432/csv2json");
    csvString = "header1,header2,header3\nRow1_1,Row1_2,Row1_3\nRow2_1,Row2_2,Row2_3";
    console.log( csv2json(csvString) );
```
