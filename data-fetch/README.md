# Data fetching

The contents of this folder are not needed for the application to function. Instead, these scripts can be used to update the data using PokéAPI.

## Instructions

1. Adjust variables in `pokeapi.sh` to accommodate the latest releases, such as the total number of species. If the API does not have much encounter data after X/Y, it may not be necessary to fetch the encounter table.

2. Execute `pokeapi.sh` using Bash to fetch the latest evolution chains, species, and encounter tables. If using Windows, the [WSL package](https://learn.microsoft.com/en-us/windows/wsl/install) should include Bash. Otherwise, rewriting it in PowerShell is trivial.

3. Start a local server in the `data-fetch` directory. A quick example using Python: `python3 -m http.server`. The scripts can also be placed in an Apache/nginx public directory.

4. At the bottom of `dataparse.js`, uncomment the function you'd like to execute.

5. Navigate to the server in your browser to perform the parsing. Open the console log with F12 to see the current status. When finished, the parsed object should be printed on your screen.

6. Manipulate the object as needed. For instance, the evolution chains contain a lot of extraneous information not used by this application. I trimmed down the methods afterwards to only have one per Pokémon then moved that data to separate objects.

7. Shut down the local server with `Ctrl-C`.