import React, { lazy, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import TabBarComponent from 'components/TabBarComponent';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import CategoriesStore from './CategoriesStore/Categories';
import { CategoriesViewModelContextProvider } from './CategoriesViewModels/CategoriesViewModelContextProvider';
import CategoriesViewModel from './CategoriesViewModels/CategoriesViewModel';
import PAGE_STATUS from 'constants/PageStatus';
import Spinner from 'components/Spinner';

const CategoriesComponent = lazy(() => import('./Component/Categories'));
const categoriesStore = new CategoriesStore();
const categoriesViewModel = new CategoriesViewModel(categoriesStore);

const Categories = observer(() => {
  const [entriesFound, setEntriesFound] = useState(0);
  const { t } = useTranslation('common');
  return (
    <CategoriesViewModelContextProvider viewModel={categoriesViewModel}>
      <div className="py-4 px-3 h-100 d-flex flex-column">
        <div className="d-flex align-items-start justify-content-between flex-wrap mb-32">
          <div>
            <h2 className="text-blue-0 fw-bold mb-sm">{t('txt_menu_cate')}</h2>
            <p className="mb-0 text-color fs-14">
              {entriesFound} {t('txt_entries_found')}
            </p>
          </div>
          <Link
            to="/categories-create"
            className="btn btn-success px-16 py-7px lh-lg text-capitalize fw-semibold rounded-1"
            onClick={() => {}}
          >
            <Icon icon="akar-icons:plus" width={24} height={24} className="me-1" />
            {t('txt_add_new_cate')}
          </Link>
        </div>
        <div className="h-100 d-flex flex-column">
          <TabBarComponent viewModel={categoriesViewModel.categoriesListViewModel} />
          {categoriesViewModel.categoriesListViewModel?.formStatus == PAGE_STATUS.LOADING ? (
            <Spinner />
          ) : (
            <CategoriesComponent
              t={t}
              data={null}
              setEntriesFound={setEntriesFound}
              categoriesViewModel={categoriesViewModel}
            />
          )}
        </div>
      </div>
    </CategoriesViewModelContextProvider>
  );
});

export default Categories;
