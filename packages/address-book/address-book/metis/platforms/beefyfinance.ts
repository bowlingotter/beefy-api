const devMultisig = '0xFf9810A3dA8a554B84Ed79D67461eCA6Eb3fA9BD';
const treasuryMultisig = '0x0f9602B7E7146a9BaE16dB948281BebDb7C2D095';

export const beefyfinance = {
  devMultisig,
  treasuryMultisig,
  strategyOwner: '0xdf68Bf80D427A5827Ff2c06A9c70D407e17DC041',
  vaultOwner: '0x41D44B276904561Ac51855159516FD4cB2c90968',
  keeper: '0x4fED5491693007f0CD49f4614FFC38Ab6A04B619',
  treasurer: treasuryMultisig,
  launchpoolOwner: devMultisig,
  rewardPool: '0x2a30C5e0d577108F694d2A96179cd73611Ee069b',
  treasury: treasuryMultisig,
  beefyFeeRecipient: '0x28A12F017d0D843d43C71235F4F58535B8BE8563',
  multicall: '0x13C6bCC2411861A31dcDC2f990ddbe2325482222',
  bifiMaxiStrategy: '0xEA01ca0423acb8476E1D3Bae572021c2aA9bd410',
  voter: '0x5e1caC103F943Cd84A1E92dAde4145664ebf692A',
  beefyFeeConfig: '0x11cB33Ef34C53DfcaA3aDdDE9a83f742ffFcfa27',
} as const;
