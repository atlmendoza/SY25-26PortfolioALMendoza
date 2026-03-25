# Seatwork #2 - CSS Position
### This seatwork will ask you to implement the different CSS position on a given code.
### short link: https://bit.ly/4c61P9K

### Instructions:
1. Please find your partner and get one sheet of pad paper and write your answers to the Guided, Challenge and Reflection Questions
2. Guided Activity (30 minutes): 

    - Copy the code below
    - Follow the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the pad paper. **Submit your paper at the end of the period and this is worth 20pts**. 

```html
html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning?

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently?

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? 

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code.
    * What do you notice on about the effect of z-index on .notice and .content boxes?


3. Please answer the following reflection questions (15 minutes)

    a. Which position type felt most intuitive to use? Why?

    b. How does absolute positioning depend on its parent element?

    c. What real‑world examples can you think of for fixed positioning (e.g., sticky navbars)?

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information?

## Rubrics for Grading 

| Criteria | Excellent (3) | Proficient (2) | Developing (1) |
|----------|---------------|----------------|----------------|
| **Technical Accuracy** | Correctly applies all position values with proper syntax and intended effect | Applies most position values correctly, minor syntax/layout issues | Several errors or missing applications |
| **Layout & Functionality** | Elements positioned logically, layout clear and functional | Layout mostly functional, minor misplacements | Layout confusing or broken |
| **Creativity & Application** | Goes beyond instructions with creative positioning (e.g., notification box, z-index layering) | Completes required tasks with some creative touches | Only attempts basic tasks |
| **Code Organization** | CSS neat, well‑structured, uses indentation/comments | CSS mostly organized, minor inconsistencies | CSS messy or hard to follow |
| **Guided Question Responses** | Thoughtful, clear answers showing deep understanding | Answers show good understanding with minor gaps | Answers brief, partially correct or missing |
| **Reflection Quality** | Insightful reflections connecting CSS positioning to real‑world design | Reflections show understanding with some practical connections | Reflections basic, limited or missing |
| **Overall Effort & Completion** | All tasks completed thoroughly | Most tasks completed | Few tasks completed |

---



