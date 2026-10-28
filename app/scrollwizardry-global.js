// angular-scroll-magic expects a global ScrollWizardry (expose-loader did this in 0.x).
// A module of its own so it runs before angular-scroll-magic is imported.
import * as ScrollWizardry from 'scrollwizardry';

window.ScrollWizardry = ScrollWizardry;
