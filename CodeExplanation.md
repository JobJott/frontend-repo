For anyone confused how the dashboard is structured; heres a walkthrough, so the dashboard component is inside a major folder called "Dashboard" and inside this folder; There are 3 Subfolders(Mainboard, Sidedash and Styles) and 3 Main files(Dashboard, Mainboard and Sidedash)

## 3 Main Files

-1. Dashboard.jsx
-2. Mainboard.jsx
-3. SideDash.jsx

-1. Dashboard.jsx is the main file(entry point) for the dashboard components which houses the Sidedash and the mainboard components

-2. Sidedash.jsx is the side navigation dashboard; pretty much self explanatory

-3. Mainboard.jsx; houses the main structure of the dashboard, basically the entry point for mainboard components; houses the jobpipeline.jsx, the action-buttons (DropdownComponent, FilterDropdownMenu, MenuDropdown, Newjob).jsx files, Addjob.jsx and some couple others; which visibility will be toggled based on the user input or navigation patterns.

## 3 SubFolders

-1. Mainboard(contains the codes for the mainboard(actionbuttons folder, jobpipeline, JobTrackerSectionOne))
-2. Sidedash(contains the sidedash data and icons)
-3. Styles(contains the two main css file(Dashboard, Mainboard).css)
