# React Bootstrap 4 Ribbon

A responsive Microsoft's ribbon-like menu for React using Bootstrap 4, forked from and inspired by LGK's [excellent work](https://github.com/lgkonline/react-bootstrap-ribbon) doing the same thing on Bootstrap 3.   See a **demo**.


## Installation

Add it using npm `npm i react-bootstrap4-ribbon`.

Next, import the components:
```jsx
import  { Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton }  from  "react-bootstrap4-ribbon";
```
Also, you need to import the styling file:
```jsx
import  "react-bootstrap4-ribbon/dist/react-bootstrap-ribbon.css";
```
## Components

### Ribbon
Main container. Provides responsiveness to it. When in small screens, shows a combobox containing the titles from all groups it has in it.

### RibbonGroup
A group maintains RibbonGroupItems together. Aligns items by using *flex row*. It has the following properties:
* **title**:  appears on the group's footer (and also on the ribbon's combobox, in small screens);
* **colClass**: you can pass Bootstrap responsive col classes to this property, to customize how much space the group will take. The default is *col*, which means the group will take all the space available in all screen sizes.

### RibbonGroupItem
A group item is where you put your buttons. It has a single property:
* **direction**: Determine which flex orientation your group buttons will follow (*row* | *column*). Defaults to row.

### RibbonButton
A Bootstrap light block button. Has a title and an icon, that you can import from the package and pass to it as children or by compounding them into the button (as shown in Usage).

#### RibbonButtonTitle | RibbonButtonIcon
Names are self-describing. Put these inside the button. Both have the following boolean properties, which also are self-describing:
* *small* | *inline*

## Usage
This is the code from demo's simple ribbon (icons by [Font Awesome](https://fontawesome.com/)):
```jsx
<Ribbon>
  <RibbonGroup  title="Clipboard"  colClass="col-md-4">
    <RibbonGroupItem>
      <RibbonButton>
        <RibbonButton.Icon>
          <i  className="fas fa-thumbtack"></i>
        </RibbonButton.Icon>
        <RibbonButton.Title>Pin</RibbonButton.Title>
      </RibbonButton>
      <RibbonButton>
        <RibbonButton.Icon>
          <i  className="fas fa-copy"></i>
        </RibbonButton.Icon>
        <RibbonButton.Title>Copy</RibbonButton.Title>
      </RibbonButton>
      <RibbonButton>
        <RibbonButton.Icon>
          <i  className="fas fa-paste"></i>
        </RibbonButton.Icon>
        <RibbonButton.Title>Paste</RibbonButton.Title>
      </RibbonButton>
    </RibbonGroupItem>
  </RibbonGroup>
  <RibbonGroup  title="New"  colClass="col-md-5">
    <RibbonGroupItem>
      <RibbonButton>
        <RibbonButton.Icon>
          <i  className="fas fa-folder-open"></i>
        </RibbonButton.Icon>
        <RibbonButton.Title>New folder</RibbonButton.Title>
      </RibbonButton>
    </RibbonGroupItem>
    <RibbonGroupItem  direction="column">
      <RibbonButton>
        <RibbonButton.Icon  small  inline>
          <i  className="fas fa-file">&nbsp;</i>
        </RibbonButton.Icon>
        <RibbonButton.Title  inline  small>
          New file
        </RibbonButton.Title>
      </RibbonButton>
      <RibbonButton>
        <RibbonButton.Icon  small  inline>
          <i  className="fas fa-inbox">&nbsp;</i>
        </RibbonButton.Icon>
        <RibbonButton.Title  inline  small>
          Easy access
        </RibbonButton.Title>
      </RibbonButton>
    </RibbonGroupItem>
  </RibbonGroup>
  <RibbonGroup  title="Select"  colClass="col-md-3">
    <RibbonGroupItem  direction="column">
      <RibbonButton>
        <RibbonButton.Icon  small  inline>
          <i  className="fas fa-check-square">&nbsp;</i>
        </RibbonButton.Icon>
        <RibbonButton.Title  small  inline>
          Select all
        </RibbonButton.Title>
      </RibbonButton>
      <RibbonButton>
        <RibbonButton.Icon  small  inline>
          <i  className="fas fa-check">&nbsp;</i>
        </RibbonButton.Icon>
        <RibbonButton.Title  small  inline>
          Toggle selection
        </RibbonButton.Title>
      </RibbonButton>
    </RibbonGroupItem>
  </RibbonGroup>
</Ribbon>
```
## Run an example
* Clone this repo;
* install all dependencies by running `npm i`;
* cd into test-app and install all dependencies too;
* run `npm start` inside *test-app* to see a demo.
