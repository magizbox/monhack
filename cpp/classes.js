Classes = [
   {
      "name" : "g++",
      "functions": [
         {"name":"c","code":"g++ -c hello.cc\n=> Compile hello.cc file, the output is hello.o\ng++ -c world.cc\n=> Compile world.cc file, the output is world.o","signature":"g++ -c sources","description":"Compile only. Produces <tt>.o files</tt> from <b>source</b> files without doing any linking."},
        {"name":"o","code":"g++ -o hello.exe hello.o world.o\n=> place the output to hello.exe file.","signature":"g++ -o dest_file file1.o file2.o","description":"Link option, usually. Use <b>dest_file</b> as the <tt>name of the file</tt> produced by g++ (usually, this is an executable file)."},
      ]
   },
];
