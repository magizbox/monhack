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
{"name":"add","code":"git add README\ngit status\n=> # On branch master\n   # Changes to be committed:\n   # (use \"git reset HEAD <file>...\" to unstage)\n   #\n   # new file: README","signature":"git add path","description":"In order to begin <tt>tracking</tt> a new ﬁle, you use the command <tt>git add</tt>. <b>Path</b> is files to add content from <tt>fileglobs</tt> (*.c) can be given to add all matching files and also a <tt>leading directory name</tt> (e.g. dir to add dir/file1 and dir/file2) can be given to add all files in the directory, recursively."}
,
{"name":"change","code":"vim README # edit README file\ngit status\n=> # On branch master\n   # Changes to be committed:\n   # (use \"git reset HEAD <file>...\" to unstage)\n   # new file: README\n   # Changed but not updated:\n   # (use \"git add <file>...\" to update what will be committed)\n   # modified: benchmarks.rb\ngit add benchmarks.rb\ngit status\n=> # On branch master\n   # Changes to be committed:\n   # (use \"git reset HEAD <file>...\" to unstage)\n   # new file: README\n   # modified: benchmarks.rb","signature":"change your tracked files","description":"Let’s change a ﬁle that was already <tt>tracked</tt>. If you <b>change</b> a previously <tt>tracked ﬁle</tt> called <tt>benchmarks.rb</tt> and then run your status command again, you get somethingthat looks like below example."}
,
{"name":"diff","code":"git diff\n=> diff --git a/benchmarks.rb b/benchmarks.rb\n   index 3cb747f..da65585 100644\n   --- a/benchmarks.rb\n   +++ b/benchmarks.rb\n   @@ -36,6 +36,10 @@ def main\n              @commit.parents[0].parents[0].parents[0]\n            end\n   \n   +        run_code(x, 'commits 1') do\n   +          git.commits.size\n   +        end\n   +\n            run_code(x, 'commits 2') do\n              log = git.commits('master', 15)\n              log.size","signature":"git diff","description":"Viewing Your Staged and Unstaged Changes. You want to know exactly what you changed, not just which files were changed — you can use the <tt>git diff</tt> command."}
,
{"name":"commit","code":"git commit\n=> # Please enter the commit message for your changes.Lines starting\n   # with '#' will be ignored, and an empty message aborts the commit.\n   # On branch master\n   # Changes to be committed:\n   # new file: README\n   # modified: benchmarks.rb\n   ~\n   \".git/COMMIT_EDITMSG\" 10L, 283C\ngit commit -m \"Story 182: Fix benchmarks for speed\"\n=> [master 463dc4f] Story 182: Fix benchmarks for speed\n   2 files changed, 3 insertions(+)\n   create mode 100644 README\ngit commit -a -m 'added new benchmarks'\n=> [master 83e38c7] added new benchmarks\n   1 files changed, 5 insertions(+)","signature":"git commit [-a] [-m msg]","description":"Committing Your Changes. Your <tt>staging area</tt> is set up the way you want it, you can <b>commit</b> your changes. Remember that anything that is still <tt>unstaged</tt> — any files you have created or modified that you haven’t run <tt>git add</tt> on since you edited them — won’t go into this commit. You can type your commit <b>message</b> inline with the commit command by specifying it after a <b>-m</b> flag. Providing the <b>-a</b> option to the git commit command makes Git <tt>automatically stage</tt> every file that is already tracked before doing the <b>commit</b>."}
,
{"name":"rm","code":"git rm grit.gemspec\n=> rm 'grit.gemspec'\n $ git status\n On branch master\n    Changes to be committed:\n    (use \"git reset HEAD <file>...\" to unstage)\n       deleted: grit.gemspec","signature":"git rm file","description":"Remove <b>files</b> from the index, or from the working tree and the index. <tt>git rm</tt> will not remove a file from just your working directory. (There is no option to remove a file only from the working tree and yet keep it in the index; use /bin/rm if you want to do that.) The <b>files</b> being removed have to be identical to the tip of the branch, and no updates to their contents can be staged in the index, though that default behavior can be overridden with the -f option."}
,
{"name":"mv","code":"git mv README README.txt\ngit status\n=> On branch master\n   Changes to be committed:\n     (use \"git reset HEAD <file>...\" to unstage)\n   \n           renamed:    README -> README.txt","signature":"git mv source destination","description":"Move or rename a file, a directory, or a symlink. Unlike many other VCS systems, Git doesn’t explicitly track file movement. If you <tt>rename</tt> a file in Git, no metadata is stored in Git that tells it you renamed the file. However, Git is <tt>pretty smart</tt> about figuring that out after the fact — we’ll deal with detecting file movement a bit later."}
,
{"name":"log","code":"git log\n=> commit ca82a6dff817ec66f44342007202690a93763949\n   Author: Scott Chacon <schacon@gee-mail.com>\n   Date: Mon Mar 17 21:52:11 2008 -0700\n \n       changed the version number\n\n   commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7\n   Author: Scott Chacon <schacon@gee-mail.com>\n   Date: Sat Mar 15 16:40:33 2008 -0700\n\n       removed unnecessary test code\n\n    commit a11bef06a3f659402fe7563abf99ad00de2209e6\n    Author: Scott Chacon <schacon@gee-mail.com>\n    Date: Sat Mar 15 10:31:28 2008 -0700\n\n       first commit","signature":"git log","description":"Show commit logs. After you have created several commits, or if you have <tt>cloned a repository</tt> with an existing commit history, you’ll probably want to <tt>look back</tt> to see what has happened. The most basic and powerful tool to do this is the <tt>git log</tt> command."}
      ]
   },
   {
      "name" : "Undo",
      "functions": [
         {"name":"amend","code":"git commit --amend\n=> [master 60950ec] initial commit\n   1 files changed, 1 insertions(+)","signature":"git commit --amend","description":"Combine the <tt>staged changes</tt> with the <tt>previous commit</tt> and replace the previous commit with the resulting snapshot. Running this when there is nothing staged lets you edit the previous commit’s message without altering its snapshot."},
      {"name":"checkout","code":"git status\n=> On branch master\n   Changes not staged for commit:\n        modified:   hi.txt\ngit checkout master hi.txt\n=> On branch master\n   nothing to commit, working directory clean","signature":"git checkout <commit> <file>","description":"Check out a previous version of a file. This turns the <b>file</b> that resides in the working directory into an exact copy of the one from <b>commit</b> and adds it to the staging area."}
      ]
   },
   {
      "name" : "Branch",
      "functions": [
   {"name":"branch","code":"git branch\n=> master\ngit branch blue\ngit branch\n=>  blue\n  * master\ngit branch -d blue\ngit branch\n=> master","signature":"git branch","description":"List, create, or delete branches"},
   {"name":"checkout","code":"git branch\n=>* master\n    blue\ngit checkout blue\n=> Switched to branch 'blue'","signature":"git checkout <branch>","description":"Checkout a branch or paths to the working tree"},
         {"name":"merge (todo)"},
         {"name":"rebase (todo)"}
      ]
   },
   {
      "name" : "Remote",
      "functions": [
         {"name":"push (todo)"},
         {"name":"pull (todo)"},
         {"name":"fetch (todo)"},
         {"name":"remote (todo)"},
      ]
   },
   {
      "name" : "NExt",
      "functions": [

      ]
   },
];
