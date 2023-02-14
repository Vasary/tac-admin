module.exports = {
    platform: 'github',
    logLevel: 'info',
    onboardingConfig: {
        extends: ['config:base'],
    },
    repositories: ['vasary/tac-admin'],
    includeForks: true,
    gitAuthor: "Renovate bot <bot@renovate.tac.com>",
    username: "renovate",
    onboarding: false,
    printConfig: true,
    requireConfig: "optional"
};
