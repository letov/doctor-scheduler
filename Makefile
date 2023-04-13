up:
	docker-compose up -d;
	npm run start:dev;
	npm run seed;

down:
	docker-compose down;
