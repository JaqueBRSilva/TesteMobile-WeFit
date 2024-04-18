export type GitInfosProps = {
    full_name: string;
    owner: {
        avatar_url: string;
    }
    description: string;
    stargazers_count: number;
    language: string;
    html_url: string;
}