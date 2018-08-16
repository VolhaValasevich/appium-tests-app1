describe('App1', () => {

    describe('Adding a new task', () => {

        beforeAll(() => {
            browser.click('#addTaskButton');
        });

        it('should have correct title', () => {
            expect(browser.getText('#titleTextView')).toEqual('create');
        });

        it('should add a new task', () => {
            browser.element('#taskTitleEditText').setValue('A New Task');
            browser.element('#taskDescriptionEditText').setValue('Task Description');
            browser.back();
            browser.click('#saveTaskButton');
            const newTask = browser.element('android= new UiSelector().text("A New Task")');
            expect(newTask.value).not.toEqual(null, `${newTask.message} [${newTask.selector}]`);
        });
    });

    describe('Modifying a task', () => {

        beforeAll(() => {
            browser.click('android= new UiSelector().className("android.widget.TextView").resourceId("android:id/text1").instance(0)');
        });

        it('should have correct title', () => {
            expect(browser.getText('#titleTextView')).toEqual('modify');
        });

        it('should modify a task title', () => {
            browser.element('#taskTitleEditText').setValue('Modified Task');
            browser.back();
            browser.click('#saveTaskButton');
            const newTask = browser.element('android= new UiSelector().text("Modified Task")');
            expect(newTask.value).not.toEqual(null, `${newTask.message} [${newTask.selector}]`);
        });
    });

});