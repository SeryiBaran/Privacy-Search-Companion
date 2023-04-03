import { useStorageLocal } from '~/composables/useStorageLocal'

export const showed = useStorageLocal('webext-demo', true)
