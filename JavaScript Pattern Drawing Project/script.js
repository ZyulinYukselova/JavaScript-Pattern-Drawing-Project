// JavaScript Pattern Drawing Project

// Импортиране на prompt-sync
const prompt = require('prompt-sync')();

while (true) {
    // Step 1: Display a menu to the user
    console.log("🌟 Welcome to the JavaScript Pattern Drawing Program!");
    console.log("Choose a pattern type:");
    console.log("1. Right-angled Triangle");
    console.log("2. Square with Hollow Center");
    console.log("3. Diamond");
    console.log("4. Left-angled Triangle");
    console.log("5. Hollow Square");
    console.log("6. Pyramid");
    console.log("7. Reverse Pyramid");
    console.log("8. Rectangle with Hollow Center");

    // Step 2: Get the user's choice
    const choice = parseInt(prompt("Enter the number corresponding to your choice: "), 10);

    // Step 3: Get dimensions based on choice
    let rows = 0, width = 0, height = 0;

    if (choice >= 1 && choice <= 7) {
        rows = parseInt(prompt("Enter the number of rows: "), 10);
    } else if (choice === 8) {
        width = parseInt(prompt("Enter the width of the rectangle: "), 10);
        height = parseInt(prompt("Enter the height of the rectangle: "), 10);
    } else {
        console.log("❌ Invalid choice! Please restart the program.");
        continue;
    }

    // Step 4: Generate the selected pattern
    switch (choice) {
        case 1: // Right-angled Triangle
            for (let i = 1; i <= rows; i++) {
                let row = "";
                for (let j = 1; j <= i; j++) {
                    row += "* ";
                }
                console.log(row.trim());
            }
            break;
        case 2: // Square with Hollow Center
            for (let i = 1; i <= rows; i++) {
                let row = "";
                for (let j = 1; j <= rows; j++) {
                    if (i === 1 || i === rows || j === 1 || j === rows) {
                        row += "* ";
                    } else {
                        row += "  ";
                    }
                }
                console.log(row.trim());
            }
            break;
        case 3: // Diamond
            let n = rows;
            for (let i = 1; i <= n; i++) {
                console.log(" ".repeat(n - i) + "* ".repeat(i).trim());
            }
            for (let i = n - 1; i >= 1; i--) {
                console.log(" ".repeat(n - i) + "* ".repeat(i).trim());
            }
            break;
        case 4: // Left-angled Triangle
            for (let i = 1; i <= rows; i++) {
                let row = " ".repeat(rows - i) + "*".repeat(i);
                console.log(row);
            }
            break;
        case 5: // Hollow Square
            for (let i = 1; i <= rows; i++) {
                let row = "";
                for (let j = 1; j <= rows; j++) {
                    if (i === 1 || i === rows || j === 1 || j === rows) {
                        row += "* ";
                    } else {
                        row += "  ";
                    }
                }
                console.log(row.trim());
            }
            break;
        case 6: // Pyramid
            for (let i = 1; i <= rows; i++) {
                console.log(" ".repeat(rows - i) + "* ".repeat(i).trim());
            }
            break;
        case 7: // Reverse Pyramid
            for (let i = rows; i >= 1; i--) {
                console.log(" ".repeat(rows - i) + "* ".repeat(i).trim());
            }
            break;
        case 8: // Rectangle with Hollow Center
            for (let i = 1; i <= height; i++) {
                let row = "";
                for (let j = 1; j <= width; j++) {
                    if (i === 1 || i === height || j === 1 || j === width) {
                        row += "* ";
                    } else {
                        row += "  ";
                    }
                }
                console.log(row.trim());
            }
            break;
        default:
            console.log("❌ Invalid choice! Please restart the program.");
            break;
    }

    // Step 5: Optional - Allow the user to restart or exit
    const restartChoice = prompt("Do you want to restart the program? (y/n)").toLowerCase();
    if (restartChoice !== "y") {
        console.log("👋 Thanks for using the JavaScript Pattern Drawing Program! Goodbye!");
        break;
    }
}