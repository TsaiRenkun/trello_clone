# trello_clone

Creating a Trello clone using only web components, vanilla HTML, CSS and JS, without any libraries or frameworks.

## Installation Guide

1.  Install Node.js: `https://nodejs.org/en/`
2.  Install JSON Server via your Command Line Interface(CLI): `npm install -g json-server`
3.  Create a folder, navigate into it via CLI and run: `https://github.com/TsaiRenkun/trello_clone.git`
4.  Run `json-server --watch materials\db.json`
5.  Open the folder on your Windows/Mac and open the index.html via Chrome.

## Usage

### columns

1. Add new columns by using the most right input column
2. Edit columns by clicking on orange ~ at the top right of the column
3. Delete columns by clicking the Red X at the top of the column

### cards

1.  Create new cards, by clicking "+ Add a Card" at the bottom of a column
2.  To read the description of the card click on the title of the card
3.  Update card content, by clicking on orange ~ on the right side of card
4.  Delete cards by clicking by clicking the Red X at the cener of the card

- Json-Server sometimes has a delay in reading the data, therefore content might not appear. Just refresh the window!

## Structure of application

## MVP

- [x] Read Columns
- [x] Create Columns

- [x] Update Columns
- [x] Delete Columns

- [x] Read Cards
- [x] Create Cards

- [x] Update Cards
- [x] Delete Cards

- [ ] Drag and drop cards into columns

## Challenges

1. The first challenge was understanding the use of custom-elements, Custom elements are very useful as the styling was done in the Js file. I found it diffcult to understand shadowDom and how to reach it in the earlier parts of the project.
2. It was difficult to keep the lines of code to a minimum, dom manipulation required me to create buttons and divs on the go.
3. Css, working with the shadowdom.
4. Drag & drop, Finish the project with in the time frame of 2 days. wasnt able to get it to fully work.

## Furthers

1. Extending cards when clicked to read descirption
2. Deleting columns & cards
3. Editing Columns & cards 
