interface IAuthorSearchResponse {
    numFound: number;
    start: number;
    numFoundExact: boolean;
    docs: IAuthorDoc[];
}

interface IAuthorDoc {
    key: string;
    name: string; // Пример: "J. K. Rowling"
    alternate_names?: string[]; // Альтернативные имена
    birth_date?: string; // Пример: "31 July 1965"
    top_work?: string; // Пример: "Harry Potter and the Philosopher's Stone"
    top_subjects?: string[]; // Темы, связанные с автором
    work_count?: number; // Количество работ
    type?: string; // Тип объекта, обычно "author"
    ratings_average?: number;
    ratings_sortable?: number;
    ratings_count?: number;
    ratings_count_1?: number;
    ratings_count_2?: number;
    ratings_count_3?: number;
    ratings_count_4?: number;
    ratings_count_5?: number;
    want_to_read_count?: number;
    already_read_count?: number;
    currently_reading_count?: number;
    readinglog_count?: number;
    _version_?: number;
}
