import {Structure as _Structure_} from '@aws/types';

export const CreateRepositoryInput: _Structure_ = {
    type: 'structure',
    required: [
        'repositoryName',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        repositoryDescription: {
            shape: {
                type: 'string',
            },
        },
    },
};