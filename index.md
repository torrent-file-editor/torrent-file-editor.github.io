## Summary

Cross-platform application intended to create and edit .torrent and uTorrent .dat files. Replacement for [BEncode Editor](https://sites.google.com/site/ultimasites/bencode-editor) which has modern design and extra features.

## Screenshots

{%- for screenshot in site.screenshots -%}
<a href="{{ screenshot }}.png"><img style="width:300px" src="{{ screenshot }}.png" alt="{{ screenshot }}"/></a>
{%- endfor -%}

## Features

- Create .torrent file from a scratch.  
- Add new files to .torrent file.  
- Removing files from .torrent file.  
- Change files order in .torrent file.  
- Change main .torrent file infomation: name, comment, publisher, url, creation date, trackers and author.  
- Edit data as JSON-format. In this mode non-ASCII symbols not supported.  
- Translated to many languages.  
- Support different encodings.
- Portable.  
- Edit .torrent file as binary tree.  
- Search and replace in tree.  
- Open files with drag-n-drop.  
- Remove files from file list with filter.  
- Command line mode.

## Translations

{% for lang in site.langs %}
<img class="flag" src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/png100px/{{ lang.country }}.png">&ensp;{{ lang.humanlang }}  
{% endfor %}

## Buy a beer to developer <img class="scale" src="icons/beer.png">

<img class="scale" src="icons/wmlogo_16.png">&ensp;Z986009119917&ensp;<img class="scale" src="icons/wmlogo_16.png">&ensp;R131648522366

<a href="https://money.yandex.ru/to/410013137242898"><img src="icons/ya_money_logo_eng.png"></a>

