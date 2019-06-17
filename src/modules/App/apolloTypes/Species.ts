/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Species
// ====================================================

export interface Species_allFilms_edges_node {
    /**
     * The title of this film.
     */
    title: string | null;
}

export interface Species_allFilms_edges {
    /**
     * The item at the end of the edge
     */
    node: Species_allFilms_edges_node | null;
}

export interface Species_allFilms {
    /**
     * A list of edges.
     */
    edges: (Species_allFilms_edges | null)[] | null;
}

export interface Species {
    allFilms: Species_allFilms | null;
}
