Classes = [
   {
      "name" : "Config",
      "functions": [
   {"name":"global","code":"git config --global user.name \"John Doe\"\n=> username change to \"John Doe\"\ngit config --global user.email \"johndoe@example.com\"\n=> email change to \"johndoe@example.com\"","signature":"git config --global options","description":"The ﬁrst thing you should do when you install Git is to set your <b>user name</b> and <b>e-mail address</b>. This is important because every Git commit uses this information, and it’s immutably baked into the commits you pass around."},
   {"name":"list","code":"git config --list\n=> user.name=Scott Chacon\n   user.email=schacon@gmail.com\n   color.status=auto\n   color.branch=auto\n   color.interactive=auto\n   color.diff=auto\n   ...","signature":"git config --list","description":"If you want to check your settings, you can use the <tt>git config --list</tt> command to list all the settings Git can ﬁnd at that point:"},
      ]
   },
   {
      "name" : "Basic",
      "functions": [
   {"name":"init","code":"git init\n=> create an empty Git repository\ngit add *.c\n=> add all files *.c to the index\ngit add README\n=> add file README to the index\ngit commit m ’initial project version’\n=> first index","signature":"git init","description":"Create an empty Git repository or reinitialize an existing one. This creates a new subdirectory named .git that contains all of your necessary repository ﬁles - a Git repository skeleton."},
   {"name":"clone","code":"git clone git://github.com/schacon/grit.git\n=> That creates a directory named “grit”\n   - initializes a .git directory inside it,\n   - pulls down all the data for that repository,\n   - checks out a working copy of the latest ver-sion.\n   If you go into the new grit directory, you’ll see the project ﬁles\n   in there, ready to be worked on or used.","signature":"git clone url","description":"Clones <tt>a repository</tt> into a newly created directory from <b>url</b>, creates <tt>remote-tracking branches</tt> for each branch in the cloned repository, and creates and checks out <tt>an initial branch</tt> that is forked from the cloned repository’s currently active branch."}
   
      ]
   },
   {
      "name" : "Recording Changes",
      "functions": [
   {"name":"status","code":"git status\n=> # On branch master\n   nothing to commit (working directory clean)\nvim README\ngit status\n=> # On branch master\n   # Untracked files:\n   # (use \"git add <file>...\" to include in what will be committed)\n   #\n   # README","signature":"git status","description":"The main tool you use to determine which ﬁles are in which state is the <tt>git status</tt> command."},
   {"name":"add","code":"git add README\ngit status\n=> # On branch master\n   # Changes to be committed:\n   # (use \"git reset HEAD <file>...\" to unstage)\n   #\n   # new file: README","signature":"git add path","description":"In order to begin <tt>tracking</tt> a new ﬁle, you use the command <tt>git add</tt>. <b>Path</b> is files to add content from <tt>fileglobs</tt> (*.c) can be given to add all matching files and also a <tt>leading directory name</tt> (e.g. dir to add dir/file1 and dir/file2) can be given to add all files in the directory, recursively."},
   {"name":"change","code":"vim README # edit README file\ngit status\n=> # On branch master\n   # Changes to be committed:\n   # (use \"git reset HEAD <file>...\" to unstage)\n   # new file: README\n   # Changed but not updated:\n   # (use \"git add <file>...\" to update what will be committed)\n   # modified: benchmarks.rb\ngit add benchmarks.rb\ngit status\n=> # On branch master\n   # Changes to be committed:\n   # (use \"git reset HEAD <file>...\" to unstage)\n   # new file: README\n   # modified: benchmarks.rb","signature":"change your tracked files","description":"Let’s change a ﬁle that was already <tt>tracked</tt>. If you <b>change</b> a previously <tt>tracked ﬁle</tt> called <tt>benchmarks.rb</tt> and then run your status command again, you get somethingthat looks like below example."}
   
      ]
   },
   {
      "name" : "NExt",
      "functions": [

      ]
   },
];
