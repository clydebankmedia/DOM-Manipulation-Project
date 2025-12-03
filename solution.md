# Solution Code - DOM Manipulation

<details>
<summary> Step 1 Solution - Select the Elements</summary>  
JavaScript - script.js

```jsx
/*****************************************************
 * STEP 1: Select the elements you'll modify
 * - Use document.querySelector() to select:
 *   - The <main> content area
 *   - The #themeButton
 *****************************************************/
const mainContent = document.querySelector('main');
const themeButton = document.querySelector('#themeButton');

// ✅ Checkpoint: log selected elements to confirm you targeted correctly
console.log('mainContent:', mainContent);
console.log('themeButton:', themeButton);

```

</details>

<details>
<summary>Step 2 Solution – Write a Function for Immediate Style Changes</summary>
JavaScript - script.js

```jsx
/*****************************************************
 * STEP 2: Write a function for immediate style changes
 *****************************************************/
function applyImmediateStyles() {
    // Core style changes (make it obvious)
    mainContent.style.backgroundColor = '#0f172a'; // deep slate
    mainContent.style.color = '#e5e7eb';           // light text

    // 1–2 small adjustments
    mainContent.style.padding = '24px';
    mainContent.style.borderRadius = '8px';

}
```
</details>  
<details>
<summary>Step 3 Solution – Add the Delayed Style Change</summary>
JavaScript - script.js

```jsx
function applyImmediateStyles() {
 // ... earlier code 
 
    /***************************************************
     * STEP 3: Add the delayed style change (call helper)
     ***************************************************/

    applyDelayedStyle(mainContent, 'fontSize', '18px'); // delayed ~2s
 
 }
```

</details>   
<details>

<summary> Step 4 Solution – Bind Your Click Handler</summary>
JavaScript - script.js

```jsx
// outside of the applyImmediateStyles function

/*****************************************************
 * STEP 4: Connect the function to the button's click
 *****************************************************/
themeButton.addEventListener('click', applyImmediateStyles); // pass reference

// ❌ Common mistake (don’t do this): calls the function immediately
// themeButton.addEventListener('click', applyImmediateStyles());
```
</details>    


<details>
    <summary>Final Solution</summary>
JavaScript - script.js

```jsx
console.log('JS:Loaded');

/*****************************************************
 * Starter helper (prebuilt)
 * Simple: Change ONE style property after 2 seconds.
 * Example: applyDelayedStyle(mainContent, "fontSize", "18px");
 *****************************************************/
function applyDelayedStyle(element, property, value) {
    setTimeout(function () {
        element.style[property] = value;
    }, 2000);
}

/*****************************************************
 * STEP 1: Select the elements you'll modify
 * - Use document.querySelector() to select:
 *   - The <main> content area
 *   - The #themeButton
 *****************************************************/

const mainContent = document.querySelector('main');
const themeButton = document.querySelector('#themeButton');

// ✅ Checkpoint: log selected elements to confirm you targeted correctly
console.log('mainContent:', mainContent);
console.log('themeButton:', themeButton);


/*****************************************************
 * STEP 2: Write a function for immediate style changes
 * Goal: Make the change obvious and add 1–2 small tweaks.
 *
 * TODOs for learners:
 *  - Update TWO core styles on mainContent (e.g., backgroundColor, color)
 *  - Add 1–2 small adjustments (e.g., padding, borderRadius, fontWeight)
 *    Remember camelCase property names and include units for sizes.
 *****************************************************/
function applyImmediateStyles() {
    // ===== TODO: core immediate changes (samples shown as comments) =====
    mainContent.style.backgroundColor = '#0f172a'; // deep slate
    mainContent.style.color = '#e5e7eb';           // light text

    // ===== TODO: add 1–2 small adjustments =====
    mainContent.style.padding = '24px';
    mainContent.style.borderRadius = '8px';

    /***************************************************
     * STEP 3: Add the delayed style change (call helper)
     * After your immediate changes above, call applyDelayedStyle()
     * to update ONE property after ~2 seconds.
     *
     * Example (uncomment and adjust as desired):
     ***************************************************/
    applyDelayedStyle(mainContent, 'fontSize', '18px');
}

/*****************************************************
 * STEP 4: Connect the function to the button's click
 *****************************************************/
themeButton.addEventListener('click', applyImmediateStyles);


```
</details>