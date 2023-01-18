import React, { useEffect, useState } from 'react';
import { AesirxDmaChannelPost } from 'aesirx-dma-app';
import { CMS_ITEMS_DETAIL_FIELD_KEY } from 'aesirx-dma-lib';
import { useThemeContext } from 'themes/ThemeContextProvider';
import { useTranslation } from 'react-i18next';
const DMAComponent = ({ store }) => {
  const { theme } = useThemeContext();
  const { i18n } = useTranslation('common');
  const [content, setContent] = useState(
    store.formPropsData?.[CMS_ITEMS_DETAIL_FIELD_KEY.INTRO_TEXT]
  );

  const [title, setTitle] = useState(store.formPropsData?.[CMS_ITEMS_DETAIL_FIELD_KEY.NAME]);

  useEffect(() => {
    if (title !== store.formPropsData?.[CMS_ITEMS_DETAIL_FIELD_KEY.NAME]) {
      setTitle(store.formPropsData?.[CMS_ITEMS_DETAIL_FIELD_KEY.NAME]);
    }

    if (content !== store.formPropsData?.[CMS_ITEMS_DETAIL_FIELD_KEY.INTRO_TEXT]) {
      setContent(store.formPropsData?.[CMS_ITEMS_DETAIL_FIELD_KEY.INTRO_TEXT]);
    }

    return () => {};
  }, [
    store.formPropsData?.[CMS_ITEMS_DETAIL_FIELD_KEY.NAME],
    store.formPropsData?.[CMS_ITEMS_DETAIL_FIELD_KEY.INTRO_TEXT],
  ]);

  return (
    <AesirxDmaChannelPost
      title={title}
      description={content}
      lang={i18n?.language}
      theme={theme?.theme}
    />
  );
};

export default DMAComponent;
