import { styled } from 'styled-components'
import backgroundSvg from '../../assets/background.svg'

export const HomeContainer = styled.div`
  > h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;

    margin: 2rem 0 3.375rem 0;
  }
`

export const Banner = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 3.5rem;
  margin: 5.75rem -10rem;
  padding: 0 10rem;

  background-image: url(${backgroundSvg});
  background-size: cover;

  img {
    width: 100%;
    max-width: 476px;
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme['base-title']};
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  line-height: 130%;
`

export const Subtitle = styled.h3`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 130%;

  padding-top: 1rem;
  padding-bottom: 4.125rem;
`

export const Items = styled.div`
  display: flex;
  gap: 2.5rem;

  flex-wrap: wrap;
`

export const BaseItemsColumns = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
  }

  span {
    color: ${(props) => props.theme.white};

    border-radius: 1000px;
    padding: 0.5rem;
    margin-right: 0.75rem;

    display: inline-flex;
  }
`

export const ItemsFirstColumn = styled(BaseItemsColumns)`
  div:first-child span {
    background: ${(props) => props.theme['yellow-dark']};
  }

  div:nth-child(2) span {
    background: ${(props) => props.theme.yellow};
  }
`

export const ItemsSecondColumn = styled(BaseItemsColumns)`
  div:first-child span {
    background: ${(props) => props.theme['base-text']};
  }

  div:nth-child(2) span {
    background: ${(props) => props.theme.purple};
  }
`

export const CatalogSection = styled.section`
  display: flex;
  flex-wrap: wrap;

  gap: 2rem;
`
