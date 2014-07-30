Classes = [
   {
      "name" : "Basic",
      "functions": [
         {"name":"expression","code":"1 + 1\n=> [1] 2\n\"Hi R\"\n=> [1] Hi R\n6 * 7\n=> [1] 42\n3 < 4\n=> [1] TRUE\n2 + 2 == 5\n=> [1] FALSE\nT == TRUE\n=> [1] TRUE","signature":"expression","description":"just normal <b>expressions</b>: simple math, string, logical values"},
         {"name":"variable","code":"x <- 42\n> x / 2\n=> [1] 21\nx <- \"Arr, matey!\"\n=> [1] \"Arr, matey!\"\nx # print x\n=> [1] \"Arr, matey!\"\nx <- TRUE\n=> [1] TRUE","signature":"variable","description":"As in other programming languages, you can store values into a <b>variable</b> to access it later."},
         {"name":"function","code":"sum(1,3,5)\n=> [1] 9\nrep(\"Yo ho!\", times = 3)\n=> [1] \"Yo ho!\" \"Yo ho!\" \"Yo ho!\"\nsqrt(16)\n=> [1] 4","signature":"function(first_argument, second_argument,...)","description":"You call a <b>function</b> by typing its name, followed by one or more <b>arguments</b> to that function in parenthesis."},
         {"name":"help","code":"help(sum)\n=> sum package:base R Documentation\n Sum of Vector Elements\n Description:\n 'sum' returns the sum of all the values present in its arguments.\n Usage:\n sum(..., na.rm = FALSE)\n ...\nexample(min)\n=> min> require(stats); require(graphics) \n min> min(5:1, pi) #-> one number\n [1] 1\n\n min> pmin(5:1, pi) #-> 5 numbers\n [1] 3.141593 3.141593 3.000000 2.000000 1.000000\n\n ...","signature":"help(function_name)","description":"<tt>help(function_name)</tt> brings up help for the given function."},
      ]
   },
   {
      "name" : "Input and output",
      "functions": [
         {"name":"read.csv","code":"mydata = read.csv(\"mydata.csv\") # read csv file \nmydata \n=> Col1 Col2 Col3 \n 1 100 a1 b1 \n 2 200 a2 b2 \n 3 300 a3 b3","signature":"read.csv(file=\"filename\", head=TRUE, sep=\",\")","description":"Reads a file in table format and creates a data frame from it, with cases corresponding to lines and variables to fields in the file."},
      ]
   },
   {
      "name" : "Data creation",
      "functions": [
         {"name":"<funcntion name>","code":"<function code>","signature":"<function signature>","description":"<function description>"},
      ]
   },
   {
      "name" : "Script",
      "functions": [
         {"name":"Rscript","code":"Rscript script.r","signature":"Rscript file.r","description":"<function description>"},
      ]
   }
];
