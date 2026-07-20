 // --- STEP BY STEP PROCESSING ARCHITECTURE ---

    // DOM Phase Wrappers
    const phase1 = document.querySelector('#phase1');
    const phase2 = document.querySelector('#phase2');
    const phase3 = document.querySelector('#phase3');

    // DOM Step Headings Indicators
    const step1Indicator = document.querySelector('#step1Indicator');
    const step2Indicator = document.querySelector('#step2Indicator');
    const step3Indicator = document.querySelector('#step3Indicator');

    // DOM Validation Alert Box
    const errorAlert = document.querySelector('#errorAlert');

    // Capture Buttons Links
    const phaseTwo = document.querySelector('#phaseTwo');
    const phaseThree = document.querySelector('#phaseThree');
    const btnReset = document.querySelector('#btnReset');

    // Input Streams Nodes Selection
    const firstName = document.querySelector('#firstName');
    const middleName = document.querySelector('#middleName');
    const lastName = document.querySelector('#lastName');
    const extName = document.querySelector('#extName');
    const age = document.querySelector('#age');
    const gender = document.querySelector('#gender');
    const birthday = document.querySelector('#birthday');
    const currentAddress = document.querySelector('#currentAddress');
    const permanentAddress = document.querySelector('#permanentAddress');

    // TRANSITION ACTION 1: Processing Name Streams
    phaseTwo.addEventListener('click', () => {
        // Reset dynamic visibility validation container flags
        errorAlert.classList.add('d-none');

        // Capture data values, then apply basic processing filters
        const fNameClean = firstName.value.trim();
        const lNameClean = lastName.value.trim();
        const mNameClean = middleName.value.trim();
        const eNameClean = extName.value.trim();
        const aNameClean = age.value.trim();
        const gNameClean = gender.value.trim();
        const dNameClean = birthday.value.trim();

        // Strict validation rule enforcement
        if (fNameClean === "" || lNameClean === "" || aNameClean === "" || gNameClean === "" || dNameClean === "" ) {
            errorAlert.classList.remove('d-none');
            errorAlert.textContent = "Error: Please input the required (*) information.";
            return;
        }
        else if ( /^\d+$/.test(fNameClean) || /^\d+$/.test(lNameClean) || /^\d+$/.test(mNameClean) || /^\d+$/.test(eNameClean) )  {
            errorAlert.classList.remove('d-none');
            errorAlert.textContent = "Validation Failure: Please do not input numbers in your name."
            return;
        }
        else if (aNameClean > 100) {
            errorAlert.classList.remove('d-none');
            errorAlert.textContent = "Error: Age cannot be greater than 100."
            return;
        }
        else if (aNameClean < 12) {
            errorAlert.classList.remove('d-none');
            errorAlert.textContent = "Ages less than 12 aren't allowed on this website."
            return;
        }
        
        else {
            // Advance visual stage indicator layout frames
            phase1.classList.add('d-none');
            phase2.classList.remove('d-none');
            
            part1Indicator.className = "text-muted flex-fill";
            part2Indicator.className = "text-primary border-bottom border-3 border-primary pb-1 flex-fill";
        }
        
    });

    // TRANSITION ACTION 2: Processing Location Layout Streams
    phaseThree.addEventListener('click', () => {
        errorAlert.classList.add('d-none');

        const currentAddrClean = currentAddress.value.trim();
        const permAddrClean = permanentAddress.value.trim();

        // Strict layout validation check
        if (currentAddrClean === "" || permAddrClean === "") {
            errorAlert.classList.remove('d-none');
            errorAlert.textContent = "Validation Failure: Both Address fields are required fields!";
            return;
        }

        // Form string manipulation manipulations for Corporate HR Uniformity standards
        const formattedFirst = firstName.value.trim().toUpperCase();
        const formattedMiddle = middleName.value.trim() !== "" ? middleName.value.trim().toUpperCase() + " " : "";
        const formattedLast = lastName.value.trim().toUpperCase();
        const formattedExt = extName.value.trim() !== "" ? ", " + extName.value.trim().toUpperCase() : "";
        const formattedAge = age.value.trim().toUpperCase();
        const formattedGender = gender.value.trim().toUpperCase();
        const formattedBirthday = birthday.value.trim().toUpperCase();

        // Target injections handling
        previewName.textContent = `${formattedLast}, ${formattedFirst} ${formattedMiddle}${formattedExt}`;
        previewInfo.textContent = `${formattedAge}, ${formattedGender}, ${formattedBirthday}`;
        previewCurrent.textContent = currentAddrClean.toUpperCase();
        previewPermanent.textContent = permAddrClean.toUpperCase();

        // Switch panel layout view via d-none modifications
        phase2.classList.add('d-none');
        phase3.classList.remove('d-none');

        part2Indicator.className = "text-muted flex-fill";
        part3Indicator.className = "text-success border-bottom border-3 border-success pb-1 flex-fill";
    });

    // RESTART INTERFACES STATE ACTIONS
    btnReset.addEventListener('click', () => {
        // Clear value streams inside DOM forms
        firstName.value = "";
        middleName.value = "";
        lastName.value = "";
        extName.value = "";
        age.value = "";
        gender.value = "";
        birthday.value = "";
        currentAddress.value = "";
        permanentAddress.value = "";
        
        
        // Return visibility toggles back to startup condition indexes
        phase3.classList.add('d-none');
        phase1.classList.remove('d-none');

        part3Indicator.className = "text-muted flex-fill";
        part1Indicator.className = "text-primary border-bottom border-3 border-primary pb-1 flex-fill";
    });