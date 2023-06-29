#!/bin/bash

# Use this file to fetch data from pokeapi.co; these data should be cached to prevent
# constantly fetching resources

# Create necessary folders
if [ ! -d cache/evolution ]; then
  mkdir -p cache/evolution;
fi
if [ ! -d cache/pokemon ]; then
  mkdir -p cache/pokemon;
fi
if [ ! -d cache/encounters ]; then
  mkdir -p cache/encounters;
fi


# Evolution chains
for i in {1..538}; do #currently highest value: 538
    if [ ! -f "cache/evolution/$i.json" ]; then
        echo ">>> Downloading evolution chain $i"
        # Skips those that fail
        `curl --fail -o "cache/evolution/$i.json" "https://pokeapi.co/api/v2/evolution-chain/$i/"` || echo ">>> Download failed" # || break
    fi
done

# Pokémon; much of this data is useless for this project
for i in {1..1010}; do #currently highest value: 1010
    if [ ! -f "cache/pokemon/$i.json" ]; then
        echo ">>> Downloading Pokémon species $i"
        # Skips those that fail
        `curl --fail -o "cache/pokemon/$i.json" "https://pokeapi.co/api/v2/pokemon-species/$i/"` || echo ">>> Download failed" # || break
    fi
done

# Pokémon encounters
for i in {1..721}; do #no data past Gen 6
    if [ ! -f "cache/encounters/$i.json" ]; then
        echo ">>> Downloading Pokémon encounters $i"
        # Skips those that fail
        `curl --fail -o "cache/encounters/$i.json" "https://pokeapi.co/api/v2/pokemon/$i/encounters"` || echo ">>> Download failed" # || break
    fi
done

echo ">>> Done"