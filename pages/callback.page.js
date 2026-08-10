export class CallbackPage {
  constructor(page) {
    this.page = page;

    this.heroHeading = page.getByRole('heading', {
      name: /Infuse your business with synergy/
    });

    this.nameInput = page.getByLabel('Name *');
    this.emailInput = page.getByLabel('Email *');
    this.phoneInput = page.getByLabel('Phone *');
    this.companyInput = page.getByLabel('Company');
    this.websiteInput = page.getByLabel('Website');

    this.employeesSelect = page.getByLabel('Number of Employees');

    this.submitButton = page.getByRole('button', {
      name: 'Request a call back'
    });

    this.thankYouHeading = page.getByRole('heading', {
      name: 'Thank You!'
    });
  }

  async goto() {
    await this.page.goto('/');
  }

  async fillForm({ name, email, phone, company, website }) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.companyInput.fill(company);
    await this.websiteInput.fill(website);
  }

  async selectEmployees(option) {
    await this.employeesSelect.selectOption(option);
  }

  async submit() {
    await this.submitButton.click();
  }
}