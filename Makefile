.PHONY: help validate new-case

help:
	@echo "EIR helper targets"
	@echo "  make validate               Run repository safety and integrity checks"
	@echo "  make new-case IDEA='Name'   Scaffold a private working case"

validate:
	python3 scripts/validate_repository.py

new-case:
	@test -n "$(IDEA)" || (echo "Set IDEA='Your startup idea'" && exit 1)
	python3 scripts/new_case.py "$(IDEA)"
