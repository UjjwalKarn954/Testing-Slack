"use strict";
// https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html
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
exports.ElasticBeanstalkApplication = void 0;
var cdktf = require("cdktf");
function elasticBeanstalkApplicationAppversionLifecycleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_source_from_s3: cdktf.booleanToTerraform(struct.deleteSourceFromS3),
        max_age_in_days: cdktf.numberToTerraform(struct.maxAgeInDays),
        max_count: cdktf.numberToTerraform(struct.maxCount),
        service_role: cdktf.stringToTerraform(struct.serviceRole)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html aws_elastic_beanstalk_application}
*/
var ElasticBeanstalkApplication = /** @class */ (function (_super) {
    __extends(ElasticBeanstalkApplication, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html aws_elastic_beanstalk_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticBeanstalkApplicationConfig
    */
    function ElasticBeanstalkApplication(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elastic_beanstalk_application',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._appversionLifecycle = config.appversionLifecycle;
        return _this;
    }
    Object.defineProperty(ElasticBeanstalkApplication.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplication.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkApplication.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ElasticBeanstalkApplication.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplication.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplication.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplication.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplication.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkApplication.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ElasticBeanstalkApplication.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplication.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkApplication.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ElasticBeanstalkApplication.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkApplication.prototype, "appversionLifecycle", {
        get: function () {
            return this.interpolationForAttribute('appversion_lifecycle');
        },
        set: function (value) {
            this._appversionLifecycle = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkApplication.prototype.resetAppversionLifecycle = function () {
        this._appversionLifecycle = undefined;
    };
    Object.defineProperty(ElasticBeanstalkApplication.prototype, "appversionLifecycleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appversionLifecycle;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ElasticBeanstalkApplication.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            appversion_lifecycle: cdktf.listMapper(elasticBeanstalkApplicationAppversionLifecycleToTerraform)(this._appversionLifecycle)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElasticBeanstalkApplication.tfResourceType = "aws_elastic_beanstalk_application";
    return ElasticBeanstalkApplication;
}(cdktf.TerraformResource));
exports.ElasticBeanstalkApplication = ElasticBeanstalkApplication;
