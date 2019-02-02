## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# yuvikaruna.github.io


You can very easily automate this using Bash scripting.
```
git add .

echo 'Enter the commit message:'
read commitMessage

git commit -m "$commitMessage"

echo 'Enter the name of the branch:'
read branch

git push origin $branch

read

```
store the above code as a .sh file(say gitpush.sh)

And since you have to make this sh file an executable you need to run the following command in the terminal once:
```
chmod +x gitpush.sh
```
And now run this .sh file.

Each time you run it, It will ask you for the commit message and the name of the branch. In case the branch does not exist or the push destination is not defined then git will generate an error. TO read this error, I have added the last read statement. If there are no errors, then git generates the pushed successfully type-of message.