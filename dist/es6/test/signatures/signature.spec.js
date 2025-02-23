import { signatureHelper } from '../..';
import { expect } from 'chai';
const secret = '4INSnqn9ZA9pOWHpRySS+rsEqL6qHF3CIAftipJeuDc=';
const signature = '5+vhM4vWobuiwGyLSGqOL7KwXnaQXISzuKUxhI4xL3o=';
const payload = `{
  "data": {
    "items": [
      {
        "id": "f0e9e9fa-91e8-40d5-9527-b7e0ae51fc54",
        "codename": "christian_bale",
        "collection": "default",
        "language": "en",
        "type": "actor"
      }
    ],
    "taxonomies": []
  },
  "message": {
    "id": "790b5fea-febe-4421-b8e7-d333afc60136",
    "project_id": "b259760f-81c5-013a-05e7-69efb4b954e5",
    "type": "content_item_variant",
    "operation": "publish",
    "api_name": "delivery_production",
    "created_timestamp": "2020-03-13T08:05:07.4044893Z",
    "webhook_url": "https://enxkdw8lvglue.x.pipedream.net/"
  }
}`;
const generatedHesh = signatureHelper.getHashFromString(signatureHelper.replaceLinebreaks(payload), secret);
const isValid = signatureHelper.isValidSignatureFromString(signatureHelper.replaceLinebreaks(payload), secret, signature);
describe('# Signatures', () => {
    it('Signature should be valid', () => {
        expect(isValid).to.equal(true);
    });
    it('Generated hash should match signature', () => {
        expect(generatedHesh).to.equal('5+vhM4vWobuiwGyLSGqOL7KwXnaQXISzuKUxhI4xL3o=');
    });
});
//# sourceMappingURL=signature.spec.js.map