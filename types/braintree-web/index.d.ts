// Type definitions for Braintree-web 3.75
// Project: https://github.com/braintree/braintree-web
// Definitions by: Guy Shahine <https://github.com/chlela>
//                 Jason Buckner <https://github.com/jbuckner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { VERSION, BraintreeError, callback } from './modules/core';
import { AmericanExpress } from './modules/american-express';
import { ApplePay, ApplePaySession, ApplePayStatusCodes, ApplePayPayload } from './modules/apple-pay';
import { Client, CreditCardInfo } from './modules/client';
import { DataCollector } from './modules/data-collector';
import { GooglePayment, GooglePaymentTokenizePayload } from './modules/google-payment';
import {
    HostedFields,
    HostedFieldFieldOptions,
    HostedFieldsTokenizePayload,
    HostedFieldsEvent,
    HostedFieldsStateObject,
} from './modules/hosted-fields';
import { PayPal, PayPalTokenizePayload } from './modules/paypal';
import { PayPalCheckout, PayPalCheckoutCreatePaymentOptions } from './modules/paypal-checkout';
import { ThreeDSecure, ThreeDSecureVerifyPayload } from './modules/three-d-secure';
import {
    UnionPay,
    UnionPayFetchCapabilitiesPayload,
    UnionPayEnrollPayload,
    UnionPayTokenizePayload,
} from './modules/unionpay';
import { USBankAccount } from './modules/us-bank-account';
import { VaultManager, FetchPaymentMethodsPayload } from './modules/vault-manager';
import { Venmo, VenmoTokenizePayload } from './modules/venmo';

export const americanExpress: AmericanExpress;
export const applePay: ApplePay;
export const client: Client;
export const dataCollector: DataCollector;
export const googlePayment: GooglePayment;
export const hostedFields: HostedFields;
export const paypal: PayPal;
export const paypalCheckout: PayPalCheckout;
export const threeDSecure: ThreeDSecure;
export const unionpay: UnionPay;
export const usBankAccount: USBankAccount;
export const vaultManager: typeof VaultManager;
export const venmo: Venmo;

export {
    VERSION,
    BraintreeError,
    callback,
    AmericanExpress,
    ApplePay,
    ApplePaySession,
    ApplePayStatusCodes,
    ApplePayPayload,
    Client,
    CreditCardInfo,
    DataCollector,
    GooglePayment,
    GooglePaymentTokenizePayload,
    HostedFields,
    HostedFieldFieldOptions,
    HostedFieldsTokenizePayload,
    HostedFieldsEvent,
    HostedFieldsStateObject,
    PayPal,
    PayPalTokenizePayload,
    PayPalCheckout,
    PayPalCheckoutCreatePaymentOptions,
    ThreeDSecure,
    ThreeDSecureVerifyPayload,
    UnionPay,
    UnionPayFetchCapabilitiesPayload,
    UnionPayEnrollPayload,
    UnionPayTokenizePayload,
    USBankAccount,
    VaultManager,
    FetchPaymentMethodsPayload,
    Venmo,
    VenmoTokenizePayload,
};

export as namespace braintree;
