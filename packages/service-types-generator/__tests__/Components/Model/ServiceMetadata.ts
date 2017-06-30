import {ServiceMetadata} from '../../../lib/Components/Model/ServiceMetadata';
import {ServiceMetadata as ServiceMetadataDefinition} from '@aws/types';

describe('ServiceMetadata', () => {
    const metadata: ServiceMetadataDefinition = {
        apiVersion: 'string',
        endpointPrefix: 'string',
        protocol: 'json',
        serviceFullName: 'string',
        signatureVersion: 'v4',
        uid: 'string',
    };

    it('should export metadata', () => {
        const serviceMetadata = new ServiceMetadata(metadata);
        expect(serviceMetadata.toString()).toEqual(
`import {ServiceMetadata as _ServiceMetadata_} from '@aws/types';

export const ServiceMetadata: _ServiceMetadata_ = {
    apiVersion: 'string',
    endpointPrefix: 'string',
    protocol: 'json',
    serviceFullName: 'string',
    signatureVersion: 'v4',
    uid: 'string'
};`
        );
    });
});