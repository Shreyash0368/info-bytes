import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsCard from './NewsCard'
import PlaceholderImg from '../../src/images/placeholder-news.jpg'
import Spinner from './Spinner';

let articles = [
    {
        "source": {
            "id": null,
            "name": "Phys.Org"
        },
        "author": "Science X",
        "title": "New research sheds light on early galaxy formation - Phys.org",
        "description": "Researchers have developed a new computer simulation of the early universe that closely aligns with observations made by the James Webb Space Telescope (JWST).",
        "url": "https://phys.org/news/2023-10-early-galaxy-formation.html",
        "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/new-research-sheds-lig-10.jpg",
        "publishedAt": "2023-10-26T20:35:07Z",
        "content": "Researchers have developed a new computer simulation of the early universe that closely aligns with observations made by the James Webb Space Telescope (JWST).\r\nInitial JWST observations hinted that … [+2813 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Space.com"
        },
        "author": "Brett Tingley",
        "title": "Watch the partial lunar eclipse of the Full Hunter's Moon on Oct. 28 with these free livestreams - Space.com",
        "description": "There are a number of ways you can watch the partial lunar eclipse this weekend, both in person and online.",
        "url": "https://www.space.com/partial-lunar-eclipse-full-hunters-moon-october-2023-how-to-watch",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/gegCfsSN27y9fsf82PosDf-1200-80.jpg",
        "publishedAt": "2023-10-25T20:00:36Z",
        "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "fr.de",
        "title": "Partielle Mondfinsternis am 28. Oktober: Mond wird von hellem „Stern“ begleitet - fr.de",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMic2h0dHBzOi8vd3d3LmZyLmRlL3dpc3Nlbi9tb25kLWhlbGxlci1zdGVybi1qdXBpdGVyLWJlZ2xlaXRlci1wYXJ0aWVsbGUtbW9uZGZpbnN0ZXJuaXMtMjgtb2t0b2Jlci0yMDIzLTkyNjEzODA0Lmh0bWzSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-10-27T02:58:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "msnNOW",
        "title": "SpaceX Starlink Satellites Deployed In Stunning View From Space - msnNOW",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMidWh0dHBzOi8vd3d3Lm1zbi5jb20vZW4tdXMvbmV3cy90ZWNobm9sb2d5L3NwYWNleC1zdGFybGluay1zYXRlbGxpdGVzLWRlcGxveWVkLWluLXN0dW5uaW5nLXZpZXctZnJvbS1zcGFjZS92aS1BQTFpVmFkV9IBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-10-27T02:19:51Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "EurekAlert",
        "title": "Uranus aurora discovery offers clues to habitable icy worlds - EurekAlert",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiMGh0dHBzOi8vd3d3LmV1cmVrYWxlcnQub3JnL25ld3MtcmVsZWFzZXMvMTAwNjAzNtIBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-10-27T02:01:18Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Mirage News",
        "title": "Partially unraveling entangled mystery - Mirage News",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiSmh0dHBzOi8vd3d3Lm1pcmFnZW5ld3MuY29tL3BhcnRpYWxseS11bnJhdmVsaW5nLWVudGFuZ2xlZC1teXN0ZXJ5LTExMTIwOTkv0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-10-27T01:56:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "El Espectador",
        "title": "Científicos hallan la que sería la galaxia “casi oscura” más grande reportada hasta ahora - El Espectador",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMifWh0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb20vY2llbmNpYS9jaWVudGlmaWNvcy1oYWxsYW4tbGEtcXVlLXNlcmlhLWxhLWdhbGF4aWEtY2FzaS1vc2N1cmEtbWFzLWdyYW5kZS1yZXBvcnRhZGEtaGFzdGEtYWhvcmEv0gGMAWh0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb20vY2llbmNpYS9jaWVudGlmaWNvcy1oYWxsYW4tbGEtcXVlLXNlcmlhLWxhLWdhbGF4aWEtY2FzaS1vc2N1cmEtbWFzLWdyYW5kZS1yZXBvcnRhZGEtaGFzdGEtYWhvcmEvP291dHB1dFR5cGU9YW1w?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-10-27T01:53:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Urgente 24",
        "title": "NASA: James Webb detectó algo nunca antes visto en Júpiter - Urgente 24",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiWWh0dHBzOi8vdXJnZW50ZTI0LmNvbS9vbW5pL25hc2EtamFtZXMtd2ViYi1kZXRlY3RvLWFsZ28tbnVuY2EtYW50ZXMtdmlzdG8tanVwaXRlci1uNTYyNzE20gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-10-27T01:37:57Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "T客邦 Techbang",
        "title": "比印度次大陸大2倍，地球隱藏第八大洲「西蘭大陸」被找到了？ - T客邦 Techbang",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiXmh0dHBzOi8vd3d3LnRlY2hiYW5nLmNvbS9wb3N0cy8xMTAyNDktMi10aW1lcy1sYXJnZXItdGhhbi10aGUtaW5kaWFuLXN1YmNvbnRpbmVudC1lYXJ0aC1oaWRkZW7SAWJodHRwczovL3d3dy50ZWNoYmFuZy5jb20vcG9zdHMvMTEwMjQ5LTItdGltZXMtbGFyZ2VyLXRoYW4tdGhlLWluZGlhbi1zdWJjb250aW5lbnQtZWFydGgtaGlkZGVuLmFtcA?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-10-27T01:30:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Yahoo奇摩新聞",
        "title": "減少中風失能！把握黃金時間溶栓、取栓 健保放寬給付為4.5小時 - Yahoo奇摩新聞",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMikAJodHRwczovL3R3Lm5ld3MueWFob28uY29tLyVFNiVCOCU5QiVFNSVCMCU5MSVFNCVCOCVBRCVFOSVBMiVBOCVFNSVBNCVCMSVFOCU4MyVCRC0lRTYlOEElOEElRTYlOEYlQTElRTklQkIlODMlRTklODclOTElRTYlOTklODIlRTklOTYlOTMlRTYlQkElQjYlRTYlQTAlOTMtJUU1JThGJTk2JUU2JUEwJTkzLSVFNSU4MSVBNSVFNCVCRiU5RCVFNiU5NCVCRSVFNSVBRiVBQyVFNyVCNSVBNiVFNCVCQiU5OCVFNyU4MiVCQTQtNSVFNSVCMCU4RiVFNiU5OSU4Mi0wMTAwMDA1MzcuaHRtbNIBmAJodHRwczovL3R3Lm5ld3MueWFob28uY29tL2FtcGh0bWwvJUU2JUI4JTlCJUU1JUIwJTkxJUU0JUI4JUFEJUU5JUEyJUE4JUU1JUE0JUIxJUU4JTgzJUJELSVFNiU4QSU4QSVFNiU4RiVBMSVFOSVCQiU4MyVFOSU4NyU5MSVFNiU5OSU4MiVFOSU5NiU5MyVFNiVCQSVCNiVFNiVBMCU5My0lRTUlOEYlOTYlRTYlQTAlOTMtJUU1JTgxJUE1JUU0JUJGJTlEJUU2JTk0JUJFJUU1JUFGJUFDJUU3JUI1JUE2JUU0JUJCJTk4JUU3JTgyJUJBNC01JUU1JUIwJThGJUU2JTk5JTgyLTAxMDAwMDUzNy5odG1s?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-10-27T01:07:06Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "El Tiempo",
        "title": "Presupuesto de ciencia 2024 - El Tiempo",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMifGh0dHBzOi8vd3d3LmVsdGllbXBvLmNvbS9vcGluaW9uL2NvbHVtbmlzdGFzL21vaXNlcy13YXNzZXJtYW4vcHJlc3VwdWVzdG8tZGUtY2llbmNpYS0yMDI0LWNvbHVtbmEtZGUtbW9pc2VzLXdhc3Nlcm1hbi04MjAxNTTSAYABaHR0cHM6Ly93d3cuZWx0aWVtcG8uY29tL2FtcC9vcGluaW9uL2NvbHVtbmlzdGFzL21vaXNlcy13YXNzZXJtYW4vcHJlc3VwdWVzdG8tZGUtY2llbmNpYS0yMDI0LWNvbHVtbmEtZGUtbW9pc2VzLXdhc3Nlcm1hbi04MjAxNTQ?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-10-27T01:00:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Hipertextual",
        "title": "Las palomas resuelven problemas similar a la inteligencia artificial - Hipertextual",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMif2h0dHBzOi8vaGlwZXJ0ZXh0dWFsLmNvbS8yMDIzLzEwL2xhcy1wYWxvbWFzLXJlc3VlbHZlbi1wcm9ibGVtYXMtZGUtZm9ybWEtc2ltaWxhci1hLWxhLWludGVsaWdlbmNpYS1hcnRpZmljaWFsLXNlZ3VuLXVuLWVzdHVkaW_SAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-10-27T00:51:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Mirage News",
        "title": "New Biomarker Revolutionizes Targeted Cancer Treatments - Mirage News",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiUGh0dHBzOi8vd3d3Lm1pcmFnZW5ld3MuY29tL25ldy1iaW9tYXJrZXItcmV2b2x1dGlvbml6ZXMtdGFyZ2V0ZWQtY2FuY2VyLTExMTIwMjYv0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-10-27T00:32:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "El Colombiano",
        "title": "Reptil marino que nadó hace 125 millones de años en Colombia tenía parientes rusos - El Colombiano",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMinAFodHRwczovL3d3dy5lbGNvbG9tYmlhbm8uY29tL3RlbmRlbmNpYXMvcmVwdGlsLW1hcmluby1udWV2b3MtaGFsbGF6Z29zLXBvci1zdS1yZWxhY2lvbi1jb24tcGFyaWVudGVzLXJ1c29zLXNlZ3VuLXVuaXZlcnNpZGFkLW5hY2lvbmFsLWRlLWNvbG9tYmlhLUJMMjI4Mzk4MzPSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-10-27T00:09:40Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "Zaria Gorvett",
        "title": "The scientists looking for alien vegetation - BBC.com",
        "description": "Alien life could take many different forms, but one possibility has been captivating scientists since 1945: alien \"plants\". What would they look like? And how could we find them?",
        "url": "https://www.bbc.com/future/article/20231026-the-scientists-looking-for-alien-vegetation",
        "urlToImage": "https://ychef.files.bbci.co.uk/live/624x351/p0gnwyr5.jpg",
        "publishedAt": "2023-10-27T00:04:34Z",
        "content": "On the Orion arm of the Milky Way galaxy, around 93 million miles (150 million kilometres) from the yellow dwarf star it orbits, is a medium-sized rocky planet. At the edge of a vast southern ocean, … [+2249 chars]"
    }
]

export class NewsCont extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: '8',
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            limit: 1
        }
    }
    async componentDidMount() {
        this.setState({
            articles: articles
        })
        // await this.fetchNews();
    }

    async fetchNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&language=en&apiKey=967158990b304bf4a3083f87c3c27455&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        this.setState({
            loading: true
        })
        const data = await fetch(url);
        const parsedData = await data.json();
        console.log(parsedData.articles);
        // this.setState({
        //     articles: parsedData.articles,
        //     limit: Math.ceil(parsedData.totalResults / 20),
        //     loading: false
        // });
    }

    nextPage = () => {
        this.state.page++;
        console.log(this.state.page);
        this.fetchNews();
    }
    prevPage = () => {
        this.state.page--;
        console.log(this.state.page);
        this.fetchNews();
    }
    render() {

        return (

            <div className='container my-6 '>
                <h2 className='my-4 text-center'>Info-Bytes - Byte Sized News</h2>
                {this.state.loading && <Spinner />}
                {!this.state.loading && <div className="row row-cols-1 row-cols-sm-4 my-4">
                    {this.state.articles.map((el) => {
                        return <div className="col" key={el.url}>
                            <NewsCard title={el.title} description={el.description} imageURL={el.urlToImage ? el.urlToImage : PlaceholderImg} newsURL={el.url} author={el.author} date={el.publishedAt} publisher={el.source.name} />
                        </div>
                    })}
                    <div className="d-flex justify-content-between w-100">
                        <button type="button" disabled={(this.state.page <= 1)} className="btn btn-dark" onClick={this.prevPage}>Previous</button>
                        <button type="button" disabled={(this.state.page >= this.state.limit)} className="btn btn-dark" onClick={this.nextPage}>Next</button>
                    </div>
                </div>}



            </div>
        )
    }
}

export default NewsCont