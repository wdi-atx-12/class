# Awesome Atom Shortcuts

|Keyboard Symbols| Name|
|:--------------:|:---:|
| ⌘ | command |
| ⌃ | control |
| ⌥ | option |
| ⇧ | shift   |


#### See All Shortcuts
- `⌘ ⇧ P`
or
- Pull down menu: `Atom` -> `Preferences` -> `Keybindings`


### Open Your Files in Atom From the Terminal
**This is the only command done in Terminal (everything else is in Atom):**
- `atom .`
- <details><summary>Screenshot</summary>

  ![screenshot](https://i.imgur.com/vKFlpq4.png)

</details>
- The `.` will open the directory (all three files), but you can also open individual files
- To open an individual file type `atom ` then (using the above screenshot files as an example) type `i` and then `tab` to autocomplete `index.html`

### Save Your File
- `⌘S`
- <details><summary>Screenshot -Unsaved files have a dot in their tab: In this case `index.html` is unsaved (`style.css` & `app.js` are saved)</summary>

  ![screenshot](https://i.imgur.com/vj7S3xV.png)

</details>

### Undo/Redo Typing
- `⌘Z` - undo typing
- `⌘Y` - redo typing

### Increase/Decrease Font Size
- `⌘+` - increase
- `⌘-` - decrease

### Wrap text in Single Quotes, Double Quotes or Backticks
- highlight the text you want to wrap in quotes
- press `'` or `"`
- <details><summary>Screenshot - No Quotes</summary>

  ![screenshot](https://i.imgur.com/PFUGrDK.png)

</details>
- <details><summary>Screenshot - Highlight desired text</summary>

  ![screenshot](https://i.imgur.com/co7e6b2.png)

</details>
- <details><summary>Screenshot - Quotes Added</summary>

  ![screenshot](https://i.imgur.com/KxBGg4t.png)</details>

- Note: you can use the same process to wrap text in parenthesis, curly braces, and square brackets!

### Insert HTML boilerplate
- start with a file that has an `.html` extension
 - type `html`
 - <details><summary>Screenshot</summary>

![screenshot](https://i.imgur.com/uA3zCyP.png)</details>
 - press tab
 - <details><summary>Screenshot - Boilerplate Added</summary>

![screenshot](https://i.imgur.com/s1rMncg.png)

</details>




### Toggle Showing your Project Tree
**Atom:**
- `⌘\`
- <details><summary>Screenshot - No Tree</summary>

  ![screenshot](https://i.imgur.com/SbTnRcP.png)</details>
- <details><summary>Screenshot - Tree</summary>

![screenshot](https://i.imgur.com/nSEBmUT.png)</details>

### Find a Word in a File
- `⌘F`
-  <details><summary>Screenshot</summary>

![screenshot](https://i.imgur.com/yfzGxwh.png)</details>
- Close by pressing `esc`

### Find a Word in a Project
- `⌘⇧F`
-  <details><summary>Screenshot</summary>![screenshot](https://i.imgur.com/ijvbARh.png)</details>
- Close by pressing `esc`

### Show Multiple Panes
- With multiple tabs open, drag the tab to the right, bottom, left, etc. until a portion of the atom window turns darker
- Release the tab and a new pane in the highlighted area should appear
-  <details><summary>Screenshot Three Panes</summary>

  ![screenshot](https://i.imgur.com/v4vd1Eo.png)
</details>


### Toggle Comments Multiple Lines at a Time
- Highlight the code block you want to comment out
- <details><summary>Screenshot</summary>

![screenshot](https://i.imgur.com/goRFJ8a.png)
</details>

- `⌘/`
-  <details><summary>Screenshot</summary>

  ![screenshot](https://i.imgur.com/fNkHO26.png)

</details>
- Press  `⌘/` again to comment back in
- Note: as long as you have saved your file with the proper extension: `.html`, `.css`, `.js` (etc.) the correct comment characters will be used for that language

### Indent a Block of Code
- highlight the block of code you want
- `⌘]` - Move code to the right (alternative `tab`)
- <details><summary>Screenshot Before </summary>
![screenshot](https://i.imgur.com/FxG23x4.png)
</details>
- <details><summary>Screenshot After </summary>
![screenshot](https://i.imgur.com/GsebGUj.png)
</details>
- `⌘[` - Move code to the left (alternative `⇧tab`)


### Move a block of Code
- `⌘ ⌃ Up` (Up - up arrow)
- `⌘ ⌃ Down` (Down - down arrow )
- <details><summary>Screenshot  Move Up Before</summary>
![screenshot](https://i.imgur.com/CWviaE1.png)
</details>
- <details><summary>Screenshot After </summary>
  ![screenshot](https://i.imgur.com/YlGhEqm.png)
</details>
- Note: some indentation may be lost in some cases

### Replace Across Multiple lines
- Highlight text to be replaced
- `⌘D` - to highlight next instance (as many as you'd like )
- <details><summary>Screenshot Highlight One Instance of Text </summary>![screenshot](https://i.imgur.com/rzbqt3V.png)</details>
- <details><summary>Screenshot Highlight Subsequent Text `⌘D` </summary>![screenshot](https://i.imgur.com/ckn1phO.png)</details>
- <details><summary>Start Typing (See multiple blinking cursors) </summary>![screenshot](https://i.imgur.com/ERQ7p7n.png)</details>
-  <details><summary>Click outside of selected area</summary>![screenshot](https://i.imgur.com/NeKG7jI.png)</details>

### Go To Matching Brace/Bracket/Parenthesis
- `⌃M`

### Fold/UnFold Code Block
- <details><summary> Find the little arrow bracket next to the code line number </summary>![screenshot](https://i.imgur.com/6Qnl6p4.png)</details>
- Click the arrow to fold the code block
- <details><summary>Folded code block (See multiple blinking cursors) </summary>![screenshot](https://i.imgur.com/z1h8Gfk.png)</details>
- Click arrow again to unfold



### Toggle Upper case / Lower case
- Highlight the text
- `⌘K`
  - **Then:**
  - `⌘U` to change to all upper case

  or
  - `⌘L` to change to all lower case




### View a Rendered Version of Markdown
- Markdown, is a simple text formatting language (more simple than HTML), which we will be using to share instructor notes, format homework assignment instructions and more. Typically, markdown files will be available to view on github
- However if you'd like to see the rendered version in atom you can press `⌃⇧M`
