
git status
read

echo 'Enter the commit message:'
read commitMessage

git commit -am "$commitMessage"


git push origin master

read
