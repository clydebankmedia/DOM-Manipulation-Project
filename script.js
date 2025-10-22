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


// ✅ Checkpoint: Log selected elements to confirm you targeted correctly


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


    // ===== TODO: add 1–2 small adjustments =====


    /***************************************************
     * STEP 3: Add the delayed style change (call helper)
     * After your immediate changes above, call applyDelayedStyle()
     * to update ONE property after ~2 seconds.
     *
     * Example (uncomment and adjust as desired):
     ***************************************************/

}

/*****************************************************
 * STEP 4: Connect the function to the button's click
 *****************************************************/


