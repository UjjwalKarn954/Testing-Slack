"use strict";
// https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ElasticBeanstalkApplicationVersion = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html aws_elastic_beanstalk_application_version}
*/
var ElasticBeanstalkApplicationVersion = /** @class */ (function (_super) {
    __extends(ElasticBeanstalkApplicationVersion, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html aws_elastic_beanstalk_application_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticBeanstalkApplicationVersionConfig
    */
    function ElasticBeanstalkApplicationVersion(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elastic_beanstalk_application_version',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._application = config.application;
        _this._bucket = config.bucket;
        _this._description = config.description;
        _this._forceDelete = config.forceDelete;
        _this._key = config.key;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "application", {
        get: function () {
            return this.getStringAttribute('application');
        },
        set: function (value) {
            this._application = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "applicationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._application;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkApplicationVersion.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "forceDelete", {
        get: function () {
            return this.getBooleanAttribute('force_delete');
        },
        set: function (value) {
            this._forceDelete = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkApplicationVersion.prototype.resetForceDelete = function () {
        this._forceDelete = undefined;
    };
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "forceDeleteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDelete;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkApplicationVersion.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkApplicationVersion.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ElasticBeanstalkApplicationVersion.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ElasticBeanstalkApplicationVersion.prototype.synthesizeAttributes = function () {
        return {
            application: cdktf.stringToTerraform(this._application),
            bucket: cdktf.stringToTerraform(this._bucket),
            description: cdktf.stringToTerraform(this._description),
            force_delete: cdktf.booleanToTerraform(this._forceDelete),
            key: cdktf.stringToTerraform(this._key),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElasticBeanstalkApplicationVersion.tfResourceType = "aws_elastic_beanstalk_application_version";
    return ElasticBeanstalkApplicationVersion;
}(cdktf.TerraformResource));
exports.ElasticBeanstalkApplicationVersion = ElasticBeanstalkApplicationVersion;
