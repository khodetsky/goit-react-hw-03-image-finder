import { Formik} from "formik";
import { SearchbarStyles, SearchForm, SearchFormButton, SearchFormInput  } from './Searchbar.styled';

export const Searchbar = ({onSubmit}) => {
    return (
        <SearchbarStyles>
            <Formik initialValues={{searchValue: ''}} onSubmit={onSubmit}>
                <SearchForm>
                    <SearchFormButton type="submit">
                        Search
                        {/* <SearchFormButtonLabel></SearchFormButtonLabel> */}
                    </SearchFormButton>
                    <SearchFormInput
                        name="searchValue"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </Formik>
        </SearchbarStyles>
    );
}