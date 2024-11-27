import GA4React from 'ga-4-react';

// Thay YOUR_MEASUREMENT_ID bằng ID từ Google Analytics của bạn
const ga4react = new GA4React('G-PZ0KMNMRLS', { debug: true });

export const initGA = () => {
    try {
        ga4react.initialize()
            .then(() => {
                console.log('GA4 initialized');
            })
            .catch((err) => {
                console.error('GA4 initialization error:', err);
            });
    } catch (error) {
        console.error('GA4 initialization error:', error);
    }
};

export const logPageView = (path) => {
    try {
        if (ga4react.isInitialized()) {
            ga4react.pageview(path);
        }
    } catch (error) {
        console.error('Error logging page view:', error);
    }
};