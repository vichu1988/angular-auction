# Angular Auction

An Angular PWA Auction's app 


## To setup dev environment

* Install the latest version of angular cli i.e. `1.5.0-rc.1` run `npm i -g @angular/cli@next`
* Use VS Code as the IDE.
* Install the [Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials) extension
* Install [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and configure it to run on Save. Or add it as a git pre-commit.

* Clone the repo
* Run `npm i` or `yarn`
* run `ng serve`
* To use the Angular snippets simply type `a-` and hit tab to get the full list of snippets available.

## Page Routing
* `/home` Example
* `/offer/register` Register an offer page
* `/offer/details/:offerID` Details of an offer - try `http://localhost:4200/offer/details/1`
* `/offers/location/:locationID` Offers availabe at a location, similar to `/home`
* `/offers/category/:categoryID` Offers availabe for a category, similar to `/home`

## Creating a component
* `ng g c components/<component-name>` example `ng g c components/subtitle`

## Creating a page

First create the module followed the component so as to lazy load the page.
* `ng g m pages/<page-name>` example `ng g m pages/register`
* `ng g c pages/<page-name>/<page-name> --flat` example `ng g c pages/register/register --flat`
