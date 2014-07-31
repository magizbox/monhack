Classes = [
   {
      "name" : "File",
      "functions": [
         {"name":"mv","code":"mv file1 file2","signature":"mv path1 path2","description":"Move (rename) files"},
         {"name":"unzip","code":"unzip test.zip -d test","signature":"unzip file.zip -d destination_folder","description":"list, test and extract compressed files in a ZIP archive"},
      ]
   },
   {
      "name" : "Processes (todo)",
      "functions": [  
         
      ]
   },
   {
      "name" : "Software",
      "functions": [  
         {"name":"ssh-server","code":"sudo apt-get install openssh-server","signature":"","description":"install ssh server "},
         {"name":"Remote Desktop","code":"sudo apt-get install xrdp\n=> install xrdp for linux","signature":"","description":"Remote desktop server for linux. Using <tt>xrdp</tt> or <tt><a href=\"https://www.nomachine.com/download\">nomachine</a></tt>."},
      ]
   },
];
