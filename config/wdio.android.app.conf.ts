import { join } from 'node:path';
import { config as baseConfig } from './wdio.shared.local.appium.conf.js';
// import * as path from 'path';

export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    cucumberOpts: {
        require: ['./tests/steps/*.steps.ts'],
    },
    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // https://github.com/appium/appium-uiautomator2-driver
    capabilities: [
        {
            // The defaults you need to have in your config
            platformName: 'Android',
            'maxInstances': 1,
            // For W3C the appium capabilities need to have an extension prefix
            // This is `appium:` for all Appium Capabilities which can be found here

            //
            // NOTE: Change this name according to the Emulator you have created on your local machine
            // 'appium:deviceName': 'Pixel_3a_API_34_extension_level_7_arm64-v8a',
            //
            // NOTE: Change this version according to the Emulator you have created on your local machine
            'appium:platformVersion': '11.0',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'UiAutomator2',
            // 'appium:fullReset': 'true',
            'appium:autoGrantPermissions': 'true',
            // The path to the app
            'appium:app': join(
                process.cwd(),
                'apps',
                //
                // NOTE: Change this name according to the app version you downloaded
                './dailymail-android.apk',
            ),
            // 'appium:appWaitActivity': 'com.anmedia.dailymail.kindlefire.uat.MainActivity',
            'appium:newCommandTimeout': 240,
            // 'appium:dontStopAppOnReset': true,
        },
    ],
};