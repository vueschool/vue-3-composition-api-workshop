import orderBy from 'lodash.orderby'
import {ref, computed} from '@vue/composition-api'

const useOrdering = elements => {
  const orderKey = ref('id')
  const ordered = computed(() => orderBy(elements.value, orderKey.value))

  const setOrderKey = key => orderKey.value = key

  return {ordered, orderKey, setOrderKey}
}

export default useOrdering
